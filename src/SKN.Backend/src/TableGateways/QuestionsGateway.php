<?php

namespace Src\TableGateways;

class QuestionsGateway
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
                count(a.id) as AnswerCount,
                u.username
        from	question q
                left outer join answer a
        	        on a.question_id	= q.id
        		left outer join user u
        			on u.id				= q.user_id
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
                count(a.id) over(partition by q.id)		as AnswerCount,
                u.username
        from	question q
                left outer join answer a
                    on a.question_id	= q.id
                left outer join user u
                    on u.id				= q.user_id
        where	q.id = ?";
        try {
            $statement = $this->db->prepare($statement);
            $statement->execute(array($id));
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function findRecentQuestion(){
        $statement = "  select	q.*,
                        		count(a.id)	as AnswerCount,
                                u.username
                        from	question q
                                left outer join answer a
                                    on a.question_id	= q.id
                        		left outer join user u
                        			on u.id				= q.user_id
                        group by q.id
                        order by created_at DESC
                        limit	5";

        try {
            $statement = $this->db->query($statement);
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function findQuestionHavingMostAnswer(){
        $statement = "
        select  q.*,
		        count(a.id)	as AnswerCount
        from	question q
		        left outer join answer a
			        on a.question_id	= q.id
        group by q.id
        order by AnswerCount DESC
        limit 5 ";
        try {
            $statement = $this->db->query($statement);
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function findQuestionWithoutAnswer(){
        $statement = "
        select	q.*,
                u.username
        from	question q
                left outer join answer a
                    on a.question_id	= q.id
                left outer join user u
					on u.id				= q.user_id
        group by q.id
        having	count(a.id) = 0";

        try {
            $statement = $this->db->query($statement);
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }
}
