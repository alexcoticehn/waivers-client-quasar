<template>
    <q-page>
        <div>
            <h1>Add Draft Picks</h1>
            <add-draft-pick-form />
        </div>
    </q-page>
</template>

<script>
import AddDraftPickForm from "src/components/forms/AddDraftPickForm.vue";

export default {
    components: {
        AddDraftPickForm
    }
}

</script>
