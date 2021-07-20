<?php

namespace Src\TableGateways;

class QuestionGateway
{

    private $db = null;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function find($id)
    {       
        $statement = "
        select	q.*,
		        a.shorten_content,
                a.full_content,
                a.user_id			as answer_user_id,
                a.id                as answer_id,
                a.created_at        as answer_created_at,
                u.username
        from	question q
                left outer join answer a
			        on	a.question_id	= q.id
				left outer join user u
					on u.id				= q.user_id
                where	q.id	= ?
                and		a.id is not null
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
            INSERT INTO question 
                (title, content, status, user_id, created_at)
            VALUES
                (:title, :content, :status, :user_id, :created_at);
        ";

        try {
            $statement = $this->db->prepare($statement);
            $statement->execute(array(
                'title'         => $input['title'],
                'content'       => $input['content'],
                'status'        => $input['status'],
                'user_id'       => $input['user_id'],
                'created_at'    => $input['created_at']
            ));
            return $statement->rowCount();
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }
}
