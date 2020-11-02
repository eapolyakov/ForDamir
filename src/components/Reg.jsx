import Form from "react-bootstrap/cjs/Form";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import React from "react";

export default class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            AddUser:{
                name: '',
                email: '',
                pass: ''
            },
        }
        this.handlePass = this.handlePass.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleFullName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ AddUser :
                {...prevState.AddUser, name: value
                }
        }), () => console.log(this.state.AddUser))
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState( prevState => ({ AddUser :
                {...prevState.AddUser, email: value
                }
        }), () => console.log(this.state.AddUser))
    }

    handlePass(e) {
        let value = e.target.value;
        this.setState( prevState => ({ AddUser :
                {...prevState.AddUser, pass: value
                }
        }), () => console.log(this.state.AddUser))
    }

    handleAddUser(e) {
        e.preventDefault();
        let userData = this.state.AddUser;

        fetch('addUser',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
               if (data === 'success') {
                   alert('Успешно зарегистрирован');
               }else alert('Пользователь существует')
            })
        })
    }

    render() {
        return <Container>
            <div><h1>Регистрация пользователя</h1></div>
            <Form onSubmit={this.handleAddUser}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name ='email' value={this.state.AddUser.email}  handleChange={this.handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name ='name' value={this.state.AddUser.name}  handleChange={this.handleFullName} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name ='pass' value={this.state.AddUser.pass}  handleChange={this.handlePass} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button action = {this.handleAddUser} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

}}