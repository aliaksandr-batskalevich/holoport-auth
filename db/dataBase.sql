CREATE DATABASE hp_auth;
CREATE USER auth WITH PASSWORD 'holohoondra';
ALTER USER auth SUPERUSER;

CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    phone_number VARCHAR(255),
    register_date TIMESTAMP NOT NULL,
    is_active BOOLEAN DEFAULT false
);

CREATE TABLE user_roles (
    user_role_id SERIAL PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles (role_id),
    upgrade_date TIMESTAMP NOT NULL
);

CREATE TABLE activation_link (
    link_id SERIAL PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    activation_link VARCHAR(255),
    expire_date TIMESTAMP NOT NULL
);

CREATE TABLE refresh_token (
    token_id SERIAL PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    refresh_token VARCHAR(255),
    refresh_date TIMESTAMP NOT NULL,
    expire_date TIMESTAMP NOT NULL
);