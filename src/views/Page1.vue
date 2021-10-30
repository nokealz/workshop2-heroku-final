<template>
  <div class="Page1">
    <!-- <h1 class="title"> Calculator </h1> -->
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="control">
            รายได้/ชั่วโมง:
            <input class="input" type="number" placeholder="income" v-model.number="income" @change="checkNegative" min="0" />
          </div>
        </div>
      </div>

      <br>

      <div class="column">
        <div class="field">
          <div class="control">
            ชั่วโมง/วัน:
            <input class="input" type="number" placeholder="hour" v-model.number="hour" @change="checkNegative" min="0" />
          </div>
        </div>
      </div>      
    </div>

    <br>
    
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="control">
            โบนัส:
            <input class="input" type="number" placeholder="bonus" v-model.number="bonus" @change="checkNegative" min="0" />
          </div>
        </div>
      </div>
      
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <p>Total daily: {{ totaldaily() }} bath</p>
        <p>Total month: {{ totalmonth() }} baht</p>
        <p>Total bonus: {{ totalbonus() }} baht</p>
        <!--p>Total: ${{ result || 0 }}</p-->
        <p>Total: {{ total() }} baht</p>  
       
      </div>  
    </div>
    <div class="columns">
      <div class="column">
        <button class="btn btn-outline-primary" @click="reset">
          <span class="icon">
            <i class="fas fa-undo"></i>
          </span>
          <span>Reset</span>
        </button>  
      </div>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        income: '0',
        hour: '0',
        bonus: '0',
      }
    },
    methods: {
      totaldaily() {
        var total = parseInt(this.income) * parseInt(this.hour)
        return Math.round(total)
      },
      totalbonus() {
        var total = parseInt(this.income) * parseInt(this.hour) * 22 * parseInt(this.bonus)/100
        return Math.round(total)
      },
      total(){
        var total = parseInt(this.income) * parseInt(this.hour) * 22 * parseInt(this.bonus)/100 + parseInt(this.income) * parseInt(this.hour) * 22
        return Math.round(total)
      },
      totalmonth(){
        var total = parseInt(this.income) * parseInt(this.hour) * 22
        return Math.round(total)
      },
      reset() {
        this.income = '0';
        this.hour = '0';
        this.bonus = '0';
      },
      checkNegative() {
        if (this.income < 0){
          this.income = 0;
        }
        if (this.hour < 0){
          this.hour = 0;
        }
        if (this.bonus < 0){
          this.bonus = '0';
        }
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
/*   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #087eec;
  margin: 0px auto;
  margin-top: 60px;
  width:80%;
  padding: 1em;
  box-shadow: 0 0 1px rgb(0,0,0)
}
</style>