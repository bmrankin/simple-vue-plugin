<template>
  <v-btn
    large
    :color="color"
    @click="$emit('click')"
  >
    <v-icon class="mr-1">{{ icon }}</v-icon>
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    label: {
      type: String,
      default: 'Click Here'
    },
    color: {
      type: String,
      default: 'info'
    }
  }
}
</script>
