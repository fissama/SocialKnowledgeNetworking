<?php

namespace Src\TableGateways;

class QuestionGateway
{

    private $db = null;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function findAll()
    {
        $statement = "
        select	q.*,
		        count(1) as AnswerCount
        from	question q
		        left outer join answer a
			        on a.question_id	= q.id
        Group by q.id
        ";

        try {
            $statement = $this->db->query($statement);
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function find($id)
    {
        $statement = "
            select	q.*,
		        count(1) as AnswerCount
            from	question q
		        left outer join answer a
			        on a.question_id	= q.id
            where	q.id = :id
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
}
