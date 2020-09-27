<template>
<form class="create-pin-panel" @submit.prevent="createNewPin">
<div class="field">
  <label class="label" for="newPin"><strong>New Pin</strong>({{ newPinCharacterCount }}/180)</label>
  <div class="control">
    <textarea class="textarea" v-model="state.newPinContent" placeholder="Textarea"></textarea>
  </div>
</div>

<!-- <div class="field">
  <label class="label" for="newPinType">Type: </label>
  <div class="control">
    <div class="select">
      <select id="newPinType" v-model="state.selectedPinType">
        <option :value="option.value" v-for="(option, index) in state.pinTypes" :key="index">
            {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</div> -->

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Pin It!</button>
  </div>
</div>
</form>

</template>

<script>
import { reactive, computed } from 'vue'

export default {
    name: 'CreatePinPanel',
    setup(props, ctx) {
        const state = reactive({
            newPinContent: '',
            selectedPinType: 'instant',
            pinTypes: [
                { value: 'draft', name: 'Draft' },
                { value: 'instant', name: 'Instant Pin' }
            ]
        })

        const newPinCharacterCount = computed(() => state.newPinContent.length)

        function createNewPin() {
            if (state.newPinContent && state.selectedPinType !== 'draft') {
                ctx.emit('add-pin', state.newPinContent)
                state.newPinContent = ''
            }
        }

        return {
            state,
            newPinCharacterCount,
            createNewPin
        }
    }
}
</script>


<style scoped>
.create-pin-panel {
    min-width: 300px;
}
</style>