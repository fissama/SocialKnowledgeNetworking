<?php
    namespace Src\TableGateways;

    class AnswerGateway{
        private $db = null;

        public function __construct($db){
            $this->db = $db;
        }
        
        public function findAll(){
            $statement = "SELECT 
                             id, shorten_content, full_content, status, image_link, question_id, user_id, created_at
                         FROM
                             answer;
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
                            id, shorten_content, full_content, status, image_link, question_id, user_id, created_at
                        FROM
                            answer
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

        public function findByQuestionId($id){
            $statement = "SELECT 
                        id, shorten_content, full_content, status, image_link, question_id, user_id, created_at
                    FROM
                        answer
                    WHERE question_id = ?;
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
                            id, shorten_content, full_content, status, image_link, question_id, user_id, created_at
                        FROM
                            answer
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
            $statement = "INSERT INTO answer
                        (shorten_content, full_content, status, image_link, question_id, user_id)
                    VALUES
                        (:shorten_content, :full_content, :status, :image_link, :question_id, :user_id);
                    ";
            
            try{
                $statement = $this->db->prepare($statement);
                $statement->execute(array(
                    "shorten_content"=>$input['shorten_content'],
                    "full_content"=>$input['full_content'],
                    "status"=>$input['status'],
                    "user_id"=>$input['user_id'],
                    "image_link"=>$input['image_link'],
                    "question_id"=>$input['question_id']
                   
                ));
                return $statement->rowCount();
            }catch(\PDOException $e){
                exit($e->getMessage());
            }
        }

        public function update($id, Array $input){
            $statement = "UPDATE answer
                    SET
                        shorten_content = :shorten_content, 
                        full_content = :full_content,
                        status = :status,
                        user_id = :user_id,
                        image_link = :image_link,
                        question_id = :question_id
                    WHERE
                        id = :id;
                    ";

            try{
                $statement = $this->db->prepare($statement);
                $statement->execute(array(
                    'id' => (int) $id,
                    "shorten_content"=>$input['shorten_content'],
                    "full_content"=>$input['full_content'],
                    "status"=>$input['status'],
                    "user_id"=>$input['user_id'],
                    "image_link"=>$input['image_link'],
                    "question_id"=>$input['question_id']
                   
                ));
                return $statement->rowCount();
            }catch(\PDOException $e){
                exit($e->getMessage());
            }
        }

        public function delete($id){
            $statement = "DELETE 
                    FROM answer
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