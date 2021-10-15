<template>
    <div>
        <p>KU :: Workshop (Web Technology)</p>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Group</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.Group">
        </div>

        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Student ID</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.StudentID">
        </div>

        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">First Name</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.Firstname">
        </div>

        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Last Name</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.LastName">
        </div>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Nickname</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.Nickname">
        </div>

     <!--    <select class="form-select" aria-label="Default select example" :v-for="(data, index) in gender " v-bind:key="index">
        <option selected>Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        

        
        </select> -->

        <div class="form-check mb-3" v-for="(data, index) in gender " v-bind:key="index">
            <input type="radio" class="btn-check" :id="index" autocomplete="off" v-model="info.Gender" :value="data.value">
            <label class="btn btn-outline-success" :for="index">{{data.label}}</label>
        </div>

        <div >
            <button type="button" class="btn btn-success" v-on:click="save">Save</button>
        </div>


        <div :hidden="!show">
            <b-table striped hover :items="DekInfo"></b-table>
        </div>
    </div>

</template>

<script>
    export default {
        name : "Dek",
        data(){
            return {
                info :{
                    Group : null,
                    StudentID : null,
                    Firstname : null,
                    LastName : null,
                    Nickname : null,
                    Gender : null,
                    
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
                DekInfo: []
            }

        },
        methods: {
            save(){
                this.DekInfo.push(this.info);
                this.show = true;
                this.info = {
                    Group : null,
                    StudentID : null,
                    Firstname : null,
                    LastName : null,
                    Nickname : null,
                    Gender : null,
                };
            },
        }
    }

</script>

<style>

</style>
