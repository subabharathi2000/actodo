function Header(props) {
    var usrname = props.usrname
    return <>
        <h1 className="text-3xl font-medium">Hi {usrname}!</h1>
        <p>I help you manage your activities :)</p>
    </>
}

export default Header