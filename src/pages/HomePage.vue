<template>
    <div>
        <HelloWorld name="Tom"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HelloWorld from '../components/HelloWorld.vue'
import useRemoteResources from '../contexts/useRemoteResource'
import { Todo } from '../models/Todo'

export default defineComponent({
    name: 'HomePage',
    components: {HelloWorld},
    setup() {
        const todos = useRemoteResources<Todo[]>(
            'kotonoha6502/vca-how-to-manage-state'
        )

        return { todos }
    }
})

</script>