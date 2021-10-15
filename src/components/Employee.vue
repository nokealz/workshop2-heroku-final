<template>
    <div>
        <p>Employee</p>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Employee ID</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.EmployeeID">
        </div>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">First name</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.FirstName">
        </div>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Last name</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.LastName">
        </div>

        <!-- <div class="form-check mb-3">
            <input type="checkbox" class="btn-check" id="option1" autocomplete="off" v-model="info.Gender" value="Male">
            <label class="btn btn-outline-primary" for="option1">Male</label>
            <input type="checkbox" class="btn-check" id="option2" autocomplete="off" v-model="info.Gender" value="Female">
            <label class="btn btn-outline-primary" for="option2">Female</label>
        </div> -->

        <div class="form-check mb-3" v-for="(data, index) in gender " v-bind:key="index">
            <input type="radio" class="btn-check" :id="index" autocomplete="off" v-model="info.Gender" :value="data.value">
            <label class="btn btn-outline-primary" :for="index">{{data.label}}</label>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Time In</span>
            <b-form-timepicker v-model="info.timeIn" locale="en"></b-form-timepicker>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Time Out</span>
            <b-form-timepicker v-model="info.timeOut" locale="en"></b-form-timepicker>
        </div>

        <div >
            <button type="button" class="btn btn-primary " v-on:click="save">Save</button>
        </div>

         <!-- <div :hidden="!show" v-for="(data,index) in employeeInfo" :key="index" >
                  <h3>EmployeeID : {{data.EmployeeID}}</h3>
                <h3>First Name : {{data.FirstName}}</h3>
                 <h3>Last Name : {{data.LastName}}</h3>
                 <h3>Gender : {{data.Gender}} </h3>
                 <h3>Time : {{data.timeIn}} - {{data.timeOut}}</h3>
                 <h3>Active : 
                     <span v-if="data.active" v-bind:style="{color : 'green'}"> Active </span>
                     <span v-else v-bind:style="{color : 'red'}"> Non Active </span>
                 </h3>
        </div> -->
        <br>
        <div :hidden="!show">
            <b-table striped hover :items="employeeInfo"></b-table>
        </div>
    </div>

</template>

<script>
    import moment from 'moment'
    export default {
        name : "Employee",
        data(){
            return {
                info :{
                    EmployeeID : null,
                    FirstName : null,
                    LastName : null,
                    Gender : null,
                    timeIn : null,
                    timeOut : null,
                    active : false,
                },
                show : false,
                gender : [
                    {
                        label : 'Male',
                        value : 'M'
                    },
                    {
                        label : 'Female',
                        value : 'F'
                    }
                ],
                employeeInfo: []
            }

        },
        methods: {
            save(){
                this.employeeInfo.push(this.info);
                this.checkActiveTime();
                this.show = true;
                this.info = {
                    EmployeeID : null,
                    FirstName : null,
                    LastName : null,
                    Gender : null,
                    timeIn : null,
                    timeOut : null,
                    active : false,
                };
            },
            checkActiveTime(){
                const today = new Date();
                const time = moment(today, 'HH:mm');
                if(moment(this.info.timeIn, 'HH:mm').isBefore(time) &&
                moment(time).isBefore(moment(this.info.timeOut, 'HH:mm'))){
                   this.info.active = true;
                
                }else{
                    this.info.active = false;
                }
                console.log(moment(this.info.timeIn, 'HH:mm').isBefore(time))
                console.log(moment(time).isBefore(moment(this.info.timeOut, 'HH:mm')))
            }
        }

    }
</script>

<style>
</style>