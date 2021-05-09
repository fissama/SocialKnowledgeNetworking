<?php
class Database
{
    private $server_name = '34.126.87.148';
    private $database_name = 'SocialKnowledgeNetworking';
    private $username = 'root';
    private $password = 'hcmus@2021';
    private $connect;
    private $connected = false;

    public function db_connect()
    {
        // Create connection
        @$this->connect = new mysqli($this->server_name, $this->username, $this->password, $this->database_name);
        // Check connection
        if ($this->connect->connect_error) {
            //die("Connection failed: " . $conn->connect_error);
            return false;
        }

        $this->connected = true;
        return true;
    }

    public function isConnected()
    {
        return $this->connected;
    }

    public function getDatabaseName()
    {
        return $this->database_name;
    }

    public function getTable($table)
    {

        $sql = "SELECT * FROM `" . $table . "`";
        $result = $this->connect->query($sql);
        $colum = array();
        $i = 0;
        if ($result->num_rows > 0) {
            // output data of each row

            while ($line = $result->fetch_assoc()) {
                $i++;
                $row[$i] = $line;
            }
        } else {
            return 0;
        }
        return $row;
    }

    public function getColum($table, $column_name, $condition, $qty)
    {
        $colum = array();
        $i = 0;
        if ($qty <= 0) {
            $sql = "SELECT * FROM `" . $table . "` WHERE `" . $column_name . "`='" . $condition . "'";
            $result = $this->connect->query($sql);

            while ($line = $result->fetch_assoc()) {
                $i++;
                $row[$i] = $line;
            }
            return $row;
        } else {
            if ($this->getNumLinesSearch($table, $column_name, $condition) < $qty) {
                $qty = $this->getNumLinesSearch($table, $column_name, $condition);
            }
            $sql = "SELECT * FROM `" . $table . "` WHERE `" . $column_name . "`='" . $condition . "' LIMIT " . $qty;
            //echo "<br><br><h2>".$sql."</h2><br><br>";
            $result = $this->connect->query($sql);

            while ($i < $qty) {
                $i++;
                if ($result->num_rows > 0) {
                    // output data of each row
                    $row[$i] = $result->fetch_assoc();
                } else {
                    break;
                }
            }
            //echo $this->getNumLines($table);
            return $row;
        }
    }

    public function insertQueryReturn($query)
    {
        $colum = array();
        $row = array();
        $sql = $query;
        $i = 0;
        $result = $this->connect->query($sql);

        while ($line = $result->fetch_assoc()) {
            $i++;
            $row[$i] = $line;
        }
        return $row;
    }

    public function getNumLines($table)
    {
        $sql = "SELECT * FROM `" . $table . "`";
        //echo "<br><br><h2>".$sql."</h2><br><br>";
        $result = $this->connect->query($sql);
        $i = 0;
        if ($result->num_rows > 0) {
            while ($line = $result->fetch_assoc()) {
                $i++;
            }
        } else {
        }
        return $i;
    }

    public function getNumLinesSearch($table, $column_name, $condition)
    {
        $sql = "SELECT * FROM `" . $table . "` WHERE " . $column_name . "=" . $condition . "";
        //echo "<br><br><h2>".$sql."</h2><br><br>";
        $result = $this->connect->query($sql);
        $i = 0;
        if ($result->num_rows > 0) {
            while ($line = $result->fetch_assoc()) {
                $i++;
            }
        } else {
            return 0;
        }
        return $i;
    } 

    public function retryConnection($new_database)
    {
        $this->connect->close();
        $this->database_name = $new_database;
        @$this->connect = new mysqli($this->server_name, $this->username, $this->password, $new_database);
    }

    public function closeConnection()
    {
        if ($this->connect) {
            $this->connect->close();
            return true;
        } else {
            return false;
        }
    }

    public function getError()
    {
        return $this->connect->connect_error;
    }

    public function insertQuery($query)
    {
        if (mysqli_query($this->conn, $query)) {
            return true;
        } else {
            return false;
        }
    }
    public function modifyQuery($query)
    {
        if (mysqli_query($this->conn, $query)) {
            return true;
        } else {
            return false;
        }
    }
}
