function submitUser (e) {
    e.preventDefault()
    let formData = $("#blog-form").serialize()
    console.log(formData)
    $.post('/users', formData, function (res) {
        console.log(res)
        window.location.href = `/users/${res.ops[0].num}`
    })
    return false
}
