const item_ipt = document.querySelectorAll('.item_ipt');
item_ipt[0].onclick = () => {
    const info_tip = document.querySelector('.info_tip');
    info_tip.style.display = 'block';
}

item_ipt[0].onkeyup = () => {
    const util_tf = document.querySelector('.util_tf');
    util_tf.style.display = 'block';
    if(item_ipt[0].value.length < 1){
        util_tf.style.display = 'none';
    }
}

item_ipt[0].onblur = () => {
    const info_tip = document.querySelector('.info_tip');
    if(item_ipt[0].value.length == 0){
        const util_tf = document.querySelector('.util_tf');
        info_tip.style.display = 'none';
        util_tf.style.display = 'none';
    }
}