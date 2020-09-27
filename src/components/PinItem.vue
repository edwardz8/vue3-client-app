<template>
<article class="message is-primary">
        <div class="message-header">
    <p>{{username}}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    {{ pin.content }}
  </div>
</article>
</template>

<script>
export default {
    name: 'PinItem',
    props: {
        username: {
            type: String,
            required: true
        },
        pin: {
            type: Object,
            required: true
        }
    },
}
</script>