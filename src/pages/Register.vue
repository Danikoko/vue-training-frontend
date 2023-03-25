<template>
    <div id="wrapper" class="auth-main">
        <div class="container">
            <div class="row clearfix">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="javascript:void(0);"><img src="/assets/images/vue-logo.png" width="30" height="30" class="d-inline-block align-top mr-2" alt="" />Vue.js Training - Danikoko</a>
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Documentation</a></li>
                            <li class="nav-item"><router-link class="nav-link" to="/login">Sign In</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-8">
                    <div class="auth_detail">
                        <h2 class="text-monospace">
                            Everything<br />
                            you need for <br />
                            your Business
                        </h2>
                        <p>Inventory software solution for managing your sales and tracking your current financial trajectory.</p>
                        <ul class="social-links list-unstyled">
                            <li class="mr-1">
                                <a class="btn btn-default" href="https://github.com/danikoko" target="_blank" data-toggle="tooltip" data-placement="top" title="github"><i class="fa fa-github"></i></a>
                            </li>
                            <li class="mr-1">
                                <a class="btn btn-default" href="https://linkedin.com/in/daniel-enamudu" target="_blank" data-toggle="tooltip" data-placement="top" title="linkedin"><i class="fa fa-linkedin"></i></a>
                            </li>
                            <li class="mr-1">
                                <a class="btn btn-default" href="https://twitter.com/iam_danikoko" target="_blank" data-toggle="tooltip" data-placement="top" title="twitter"><i class="fa fa-twitter"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="header">
                            <p class="lead">Create an account</p>
                        </div>
                        <div class="body">
                            <form class="form-auth-small">
                                <div class="form-group">
                                    <label for="signup-email" class="control-label sr-only">Name</label>
                                    <input type="text" class="form-control" id="signup-name" placeholder="Your name" />
                                </div>
                                <div class="form-group">
                                    <label for="signup-email" class="control-label sr-only">Email</label>
                                    <input type="email" class="form-control" id="signup-email" placeholder="Your email" />
                                </div>
                                <div class="form-group">
                                    <label for="signup-password" class="control-label sr-only">Password</label>
                                    <input type="password" class="form-control" id="signup-password" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">REGISTER</button>
                            </form>
                            <div class="separator-linethrough"><span>OR</span></div>
                            <button class="btn btn-signin-social"><i class="fa fa-facebook-official facebook-color"></i> Sign in with Facebook</button>
                            <button class="btn btn-signin-social"><i class="fa fa-twitter twitter-color"></i> Sign in with Twitter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </template>
  
<script>
    import axios from 'axios';
    import useGeneralStore from '../store/general';
    import { mapState } from 'pinia';
    export default {
        data: () => {
            return {
                name: '',
                email: '',
                password: '',
                submitting: false
            }
        },
        computed: {
            ...mapState(useGeneralStore, [
                'API_URL',
            ])
        },
        methods: {
            registerUser() {
                const _this = this;
                _this.submitting = true;
                axios.post(`${_this.API_URL}register`, {
                    name: _this.name,
                    email: _this.email,
                    name: _this.password,
                }).then(RESPONSE => {
                    console.log(RESPONSE)
                }).catch(ERROR => {
                    alert(ERROR.response.data.message);
                }).then(() => {
                    _this.submitting = false;
                });
            }
        }
    }
</script>
  
<style>
  
</style>