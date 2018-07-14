<?php
session_start();

unset($_SESSION['userID']);
unset($_SESSION['username']);
session_destroy();
session_commit();
