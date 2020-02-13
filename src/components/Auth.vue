<template>
    <section>
        <b-field label="Username"
            :type="{ 'is-danger': hasError }"
            :message="{ 'Username is not available': hasError }">
            <b-input maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            :type="{ 'is-danger': hasError }"
            :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
            <b-input type="password" maxlength="30"></b-input>
        </b-field>
    </section>
</template>

<script>
    export default {
        name: 'Auth',
        data() {
            return {
                hasError: true
            }
        }
    }
</script>
