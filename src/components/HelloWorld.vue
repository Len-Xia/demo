<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>姓名：{{obj.nickname}}</p>
    <p>出生年月：{{/\d{4}-\d{1,2}-\d{1,2}/g.exec(obj.mtime)}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vue-demo',
      obj:{}
    }
  },
  mounted(){
    this.credit()
  },
  methods:{
    credit(){
      var loginMode = 'msdk';//游戏内默认msdk(wx|qq|msdk)
      var url = 'http://test.com/query_common_credit/';
      this.$http.get(url)
        .then(res => {
          console.log(res)
          this.obj = res.data.data;
        })
        .catch(err => {
          
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
