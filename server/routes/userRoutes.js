const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const quizRoutes = require('./quizRoutes');
const schedulingRoutes = require('./schedulingRoutes');

router.use('/auth', authRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/quizRoutes', quizRoutes);
router.use('/schedulingRoutes',schedulingRoutes);

router
