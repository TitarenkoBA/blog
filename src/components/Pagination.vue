<template>
    <section>
        <hr>
        <b-pagination
            :total="total"
            :current.sync="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
        </b-pagination>
    </section>
</template>

<script>
    export default {
        name: 'Pagination',
        data() {
            return {
                total: 200,
                current: 10,
                perPage: 10,
                rangeBefore: 3,
                rangeAfter: 1,
                order: '',
                size: '',
                isSimple: false,
                isRounded: true,
                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right'
            }
        }
    }
</script>