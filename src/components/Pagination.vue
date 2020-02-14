<template>
  <section class="modal-card">
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
  data () {
    return {
      total: 200,
      current: 1,
      perPage: 10,
      rangeBefore: 2,
      rangeAfter: 2,
      order: 'is-centered',
      size: 'is-small',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
    }
  }
}
</script>
