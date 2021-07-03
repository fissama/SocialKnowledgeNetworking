<?php
    namespace Src\TableGateways;

    class QuestionGateway{
        private $db = null;

        public function __construct($db){
            $this->db = $db;
        }
        
        public function findAll(){
            $statement = "SELECT 
                             id, title, content, status, user_id, created_at
                         FROM
                             question;
                    ";

            try {
                $statement = $this->db->query($statement);
                $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
                return $result;
            } catch (\PDOException $e) {
                exit($e->getMessage());
            }
        }

        public function find($id){
            $statement = "SELECT 
                            id, title, content, status, user_id, created_at
                        FROM
                            question
                        WHERE id = ?;
                ";

            try {
                $statement = $this->db->prepare($statement);
                $statement->execute(array($id));
                $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
                return $result;
            } catch (\PDOException $e) {
                exit($e->getMessage());
            }
        }

        public function findByRequest($field, $id){
            $statement = "SELECT 
                            id, title, content, status, user_id, created_at
                        FROM
                            question
                        WHERE $field = ?;
                    ";

                try {
                    $statement = $this->db->prepare($statement);
                    $statement->execute(array($id));
                    $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
                    return $result;
                } catch (\PDOException $e) {
                    exit($e->getMessage());
                }
        }

        public function insert(Array $input){
            $statement = "INSERT INTO question
                        (title, content, status, user_id)
                    VALUES
                        (:title, :content, :status, :user_id);
                    ";
            
            try{
                $statement = $this->db->prepare($statement);
                $statement->execute(array(
                    "title"=>$input['title'],
                    "content"=>$input['content'],
                    "status"=>$input['status'],
                    "user_id"=>$input['user_id']
                   
                ));
                return $statement->rowCount();
            }catch(\PDOException $e){
                exit($e->getMessage());
            }
        }

        public function update($id, Array $input){
            $statement = "UPDATE question
                    SET
                        title = :title, 
                        content = :content,
                        status = :status,
                        user_id = :user_id
                    WHERE
                        id = :id;
                    ";

            try{
                $statement = $this->db->prepare($statement);
                $statement->execute(array(
                    'id' => (int) $id,
                    "title"=>$input['title'],
                    "content"=>$input['content'],
                    "status"=>$input['status'],
                    "user_id"=>$input['user_id']
                ));
                return $statement->rowCount();
            }catch(\PDOException $e){
                exit($e->getMessage());
            }
        }

        public function delete($id){
            $statement = "DELETE 
                    FROM question
                    WHERE
                        id = :id;
                    ";
            
            try{
                $statement = $this->db->prepare($statement);
                $statement->execute(array("id"=>$id));
                return $statement->rowCount();
            }catch(\PDOException $e){
                exit($e->getMessage());
            }
        }
    }
?>