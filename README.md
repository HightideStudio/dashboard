# Start Up Server

```
bundle install
rails server
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
