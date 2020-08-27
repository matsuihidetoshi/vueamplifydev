<template>
  <div class="privateNote">
    <h1>Private Notes</h1>
    <div class="private-notes-area">
      <div v-for="(privateNote, id) in privateNotes" v-bind:key="id">
        <div class="private-note">
          {{ privateNote.content }}
        </div>
      </div>
    </div>
    <div id="chat-form">
      <textarea v-model="content" name="content" class="form" placeholder="Content"></textarea><br/>
      <button class="submit" v-on:click="createPrivateNote()">Post</button>
    </div>
  </div>
</template>
<script>
import { API, graphqlOperation} from "aws-amplify"
import { createPrivateNote } from "../graphql/mutations"
import { listPrivateNotes } from "../graphql/queries"
import { getPrivateNote } from "../graphql/queries"
import { onCreatePrivateNote } from "../graphql/subscriptions"
import _ from 'lodash'
export default {
  name: 'PrivateNote',
  data () {
    return {
      content: "",
      privateNote: null,
      privateNotes: [],
      owner: "",
      limit: 2 ** 31 - 1
    }
  },
  mounted: function () {
    this.owner = this.$store.state.user.username
    this.displayPrivateNotes()
  },
  methods: {
    createPrivateNote: async function () {
      if (this.content === "") return
      const privateNote = {content: this.content}
      try {
        this.content = ""
        await API.graphql(graphqlOperation(createPrivateNote, {input: privateNote}))
      } catch (error) {
        error
      }
    },
    displayPrivateNotes: async function () {
      let privateNotes = await API.graphql(graphqlOperation(
        listPrivateNotes, {limit: this.limit}
      ))
      this.privateNotes = _.orderBy(privateNotes.data.listPrivateNotes.items, 'updatedAt', 'desc').slice(0, 100)
      
      API.graphql(
        graphqlOperation(onCreatePrivateNote, {limit: this.limit, owner: this.owner})
      ).subscribe({
        next: (eventData) => {
          const privateNote = eventData.value.data.onCreatePrivateNote
          const privateNotes = [...this.privateNotes, privateNote]
          this.privateNotes = _.orderBy(privateNotes, 'updatedAt', 'desc').slice(0, 100)
        }
      })
    },
    singlePrivateNote: async function (selectedNote) {
      let privateNote = await API.graphql(graphqlOperation(
        getPrivateNote, {id: selectedNote.id}
      ))
      this.privateNote = privateNote
    }
  }
}
</script>
<style scoped>
  .form {
    font-size: 20px;
    border: solid 1px gray;
    border-radius: 5px;
    height: 80px;
    width: 300px;
  }
  .submit {
    width: 300px;
    font-size: 20px;
    border-radius: 5px;
    vertical-align: top;
  }
  .private-notes-area {
    width: 300px;
    height: 300px;
    display: inline-block;
    overflow: scroll;
  }
  .private-note {
    padding: 10px 20px 10px 20px;
    background-color: #eeeeee;
    border-radius: 5px;
    margin: 10px 0 10px 0;
    overflow-wrap: break-word;
    white-space: pre-line;
  }
</style>