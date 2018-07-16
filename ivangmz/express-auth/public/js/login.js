function submitUser (e) {
    e.preventDefault()
    let formData = $("#user-form").serialize()
    console.log(formData)
    $.post('/users', formData, function (res) {
        console.log(res)
        window.location.href = `/blog/${res.ops[0].num}`
    })
    return false
}





