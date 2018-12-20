# Start Up Server

```
bundle install
rails server
```

# PostgreSQL on Windows

Using the ubuntu terminal:

```
sudo apt-get install build-essential patch liblzma-dev libpq-dev
```

# Installing Redis

Redis is needed for ActionCable. <br>

1.  Install the redis server. <br>
    (You'll need to wait for initialization and create a login upon first use)
    ```
    > sudo apt-get update
    > sudo apt-get upgrade
    > sudo apt-get install redis-server
    > redis-cli -v
    ```
2. Restart the Redis server to make sure it is running
    ```
    > sudo service redis-server restart
    ```
3. Execute a simple Redis command to verify your Redis server is running and available
    ```
    > redis-cli
    127.0.0.1:6379> set user:1 "Jane"
    127.0.0.1:6379> get user:1
    "Jane"
    ```

# Figaro

Figaro is a gem that helps with using environment variables. We will use environment
variables for information that we do not want stored in the github repo.

Figaro uses a configuration file to setup the environment variables. This config file
will but git ignored.

Install figaro:

```
bundle exec figaro install
```

This will create a `config/application.yml' file which is where we put the environment
variables we want.

I have listed some env variables that are necessary in `config/initializers/figaro.rb`
