<?php

namespace Src\TableGateways;

class AnswerGateway
{

    private $db = null;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function find($id)
    {       
        $statement = "
        select	a.*,
		        u.username
        from	answer a
		        left outer join user u
			        on u.id	= a.user_id
        where	a.id	= ?
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

    public function insert(array $input)
    {
        $statement = "
            INSERT INTO answer 
                (full_content, status, image_link, question_id, user_id, created_at)
            VALUES
                (:full_content, :status, :image_link, :question_id, :user_id, :created_at);
        ";

        try {
            $statement = $this->db->prepare($statement);
            $statement->execute(array(
                'full_content'  => $input['full_content'],
                'status'        => $input['status'],
                'image_link'    => $input['image_link'],
                'question_id'   => $input['question_id'],
                'user_id'       => $input['user_id'],
                'created_at'    => $input['created_at'],
            ));
            return $statement->rowCount();
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }
}
