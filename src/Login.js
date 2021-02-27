import React from 'react';
import Footer from './Footer';




class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        user: "",
        pass: "",

      },

    };
  }

  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch (name) {
      case "user":
        errors.user = value.length < 5 ? "Username must be 5 characters length" : "";
        break;

      case "pass":
        errors.pass = value.length < 5 ? "Password too short" : "";
        break;


      default:
        break;
    }

    // console.log(this.state)
    this.setState({ errors, [name]: value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (
      this.state.errors.user.length === 0 && this.state.errors.pass.length === 0

    ) {
      alert("From is Valid");
    }
    else {
      alert("From is not Valid");
    }
  }
  render() {
    const { errors } = this.state;
    return (<>

      <div style={{backgroundColor:"deepskyblue", height:"auto"}}>

        <div style={{ textAlign: "center", margin: "50px", color: "Black" }}><h1><strong>LOGIN HERE</strong></h1></div>

        <form style={{ padding: "48px" }} onSubmit={this.submitHandler} >
          <div className="col-md-5 mx-auto" >



            <div class="col-md-12" style={{ color: "black" }}>
              <label for="validationDefaultUsername" class="form-label">Username</label>
              <div class="input-group">

                <input type="text" class="form-control" id="validationDefaultUsername" name="user" placeholder="Enter Here Your Username" aria-describedby="inputGroupPrepend2" onChange={this.changeHandler} required />

              </div>
              <p style={{ color: "red" }}>{errors.user}</p>
            </div><br></br>


            <div class="col-md-12" style={{ color: "black" }}>
              <label for="validationDefault05" class="form-label">Password</label>
              <input type="password" class="form-control" id="validationDefault05" name="pass" placeholder="Password must be Strong" onChange={this.changeHandler} required />
              <p style={{ color: "red" }}>{errors.pass}</p>
            </div>

            <br></br>
            <br></br>




            <div class="col-12" style={{ textAlign: "center" }}>
              {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </div>


        </form>
   
<Footer />
      </div>
    </>

    );
  }
};

export default Login;