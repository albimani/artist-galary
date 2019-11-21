$("form").submit((event) => {
    event.preventDefault()
    const username = $("input[name='username']").val() || "spc"
    const email = $("input[name='email']").val() || "spc@at.om"
    const password = $("input[name='password']").val() || "spcxyz"
    $.ajax({
        method: "POST",
        url: "/api/v1/auth/join",
        headers: {
            'Contnet-Type': "application/json"
        },
        data: {
            username,
            email,
            password
        },
        success: (data) => {

        },
        error: () => {

        }
    })
})
