<template>
    <div>
        <form @submit="checkForm">
            <p v-if="condition.length">
            <b>Please Input your infomation</b>
            <ul>
                <li v-for="error in condition" :key="error" style="color: red">{{ error }}</li>
            </ul>
            </p>
            <input type="text" v-model="id" placeholder="Student Id" style="margin-right:10px">
            <input type="checkbox" v-model="gender" gender="Male">Male
            <input type="checkbox" v-model="gender" gender="Female">Female
            <br>
            <input type="text" v-model="fname" placeholder="FirstName" style="margin-right:10px" required>
            <input type="text" v-model="lname" placeholder="LastName" style="margin-right:10px" required>
            <br>
            <textarea v-model="introduce" placeholder="Introduce youself"></textarea>
            <br>
            <input type="radio" id="one" value="one" v-model="picked"/> จบแล้ว
            <input type="radio" id="two" value="two" v-model="picked"/> ยังไม่จบ
            <br>
            <select v-model="selected">
                <option value="">Select</option>
                <option v-for="option in options" 
                :key="option" 
                v-bind:value="option.value">
                {{option.text}}</option>
            </select>
            <br>
            <input type="submit" value="Submit">
            <br>
            <button type="button" v-on:click="checkFormpage">ข้อมูลทั้งหมด</button>
        </form>
    </div>
</template>

<script>
import Router from "vue-router"
const router = new Router({
    mode: "history",
})
export default {
    name: "Student",
    data(){
        return{
            id: null,
            fname: null,
            lname: null,
            introduce: null,
            picked: null,
            gender: [],
            selected: "",
            options: [
                {text: "ชั้นปีที่ 1",value: "1"},
                {text: "ชั้นปีที่ 2",value: "2"},
                {text: "ชั้นปีที่ 3",value: "3"},
                {text: "ชั้นปีที่ 4",value: "4"},
            ],
            condition: [],
        }
    },
    methods: {
        checkForm(e){
            if(this.fname)
            {
                router.push(`/Page1/${this.id}/${this.fname}`)
                router.go()
            }
            e.preventDefault();
        },
        checkFormpage(){
            router.push(`/Page2`)
                router.go()
        }
    },

}
</script>

<style>
    
</style>