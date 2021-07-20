const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("./../models/User");
const { check, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken')
const config = require("config");
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const router = Router();

router.post(
  "/register",
  [
    check("email", "Не правильний email").isEmail(),
    check("password", "Мінімальна довжина паролю 6 символів").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), message: "Не коректні дані при реєстрації" });
      }
      const { email, password } = req.body;
      
      const candidate = await User.findOne({ email: email });

      if (candidate) {
        return res.status(400).json({ message: "Такий фермер вже існує" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email: email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "Вітаю! Ви тепер фермер" });
    } catch (e) {
      res.status(500).json({ message: "Щось пішло не так, попробуйте знову" });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Введіть коректний email").normalizeEmail().isEmail(),
    check("password", "Введіть пароль").exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), message: "Не коректні дані при вході" });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ message: "Такий фермер не знайдений" });
      }
    
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch){
        res.status(400).json({ message: "Не правильний пароль" });
      }

      const token = jwt.sign({userId: user.id}, config.get('jwtSecret'),{expiresIn: '1h'})
      res.json({token: token, userId: user.id})
    } catch (e) {
      res.status(500).json({ message: "Щось пішло не так, попробуйте знову" });
    }
  }
);

module.exports = router;
