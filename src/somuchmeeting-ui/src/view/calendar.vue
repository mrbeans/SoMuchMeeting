<template>
  <div>
    <full-calendar :events="fcEvents"></full-calendar>
  </div>
</template>
<script>
  export default {
    name: 'Calendar',
    data() {
      return {
        fcEvents: [{
          title: '千天计划需求评估',
          start: '2018-06-25',
          end: '2018-06-25'
        },{
          title: '千天计划需求评估',
          start: '2018-06-25',
          end: '2018-06-25'
        },{
          title: '千天计划需求评估',
          start: '2018-06-25',
          end: '2018-06-25'
        },{
          title: '千天计划需求评估',
          start: '2018-06-25',
          end: '2018-06-25'
        },]
      }
    }
  }

</script>
