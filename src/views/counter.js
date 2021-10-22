// import { ref, reactive } from '@vue/composition-api'
import { ref } from '@vue/composition-api'

function counterIncrement(value) {
    const counter = ref(value);
    function add() {
      counter.value++;
    }

    return { counterN : counter, add }
}

export default { counterIncrement }