const express = require('express');

const controller = require('../controllers/controller.js');
const auth_controller = require('../controllers/auth-controller');
const admin_controller = require('../controllers/admin-controller');
const api_controller = require('../controllers/api-controller');

const app = express();

app.get('/', controller.getIndex);

app.get('/about', controller.getAbout);

app.get('/login', auth_controller.getLogin);
app.post('/login', auth_controller.postLogin);

app.get('/logout', controller.getLogout);

app.get('/register', auth_controller.getRegister);
app.post('/register', auth_controller.postRegister);


app.get('/serviceform', auth_controller.getAddToCart);
app.post('/serviceform', auth_controller.postAddToCart);

app.post('/cart-clear', auth_controller.postDeleteAllCart);
app.post('/cart-delete-one', auth_controller.postDeleteOneCart);


app.post('/reserve', auth_controller.postReserve);

app.get('/reservation', controller.getReservation);

app.get('/faq', controller.getFAQ);

app.get('/services/pages/:serviceconcern', controller.getServices);
app.get('/services/getServiceConcerns', controller.getServiceConcerns);

app.get('/reserveinfo', controller.getReserveInfo);

app.get('/admin', admin_controller.getAdminLogin, admin_controller.getAdminDashboard);
app.post('/admin', admin_controller.postAdminLogin);
app.get('/admin/getuser', admin_controller.getCurrentUser);

app.get('/admin/reservations', admin_controller.getAdminReservations);
app.get('/admin/reservations/get', admin_controller.getAllReservations);


app.get('/admin/employees', admin_controller.getAdminEmployees);
app.get('/admin/employees/get', admin_controller.getAllEmployees);
app.post('/admin/employees/add', admin_controller.postAddEmployee);
app.post('/admin/employees/edit', admin_controller.postEditEmployee);
app.post('/admin/employees/delete', admin_controller.postDeleteEmployee);

app.get('/admin/services', admin_controller.getAdminServices);
app.get('/admin/services/find-service-collection', admin_controller.getFindServiceCollection);
app.get('/admin/services/get-service-collections', admin_controller.getServiceCollections);
app.post('/admin/services/add-service-collection', admin_controller.postAddServiceCollection);
app.post('/admin/services/edit-service-collection', admin_controller.postEditServiceCollection);
app.post('/admin/services/delete-service-collection', admin_controller.postDeleteServiceCollection);

app.get('/admin/faq', admin_controller.getFAQ);
app.get('/admin/faq/get-faqs', admin_controller.getAllFAQs);
app.get('/admin/faq/find-faq', admin_controller.getFindFAQ);
app.post('/admin/faq/add-faq', admin_controller.postAddFAQ);
app.post('/admin/faq/edit-faq', admin_controller.postEditFAQ);
app.post('/admin/faq/delete-faq', admin_controller.postDeleteFAQ);

app.get('/api/employees', api_controller.getEmployees);

app.get('/api/services', api_controller.getServices);

module.exports = app;