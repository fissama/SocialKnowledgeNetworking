<?php

namespace Src\TableGateways;

class RightMenuGateway
{

    private $db = null;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function findInfor()
    {
        
            $statement = "
            Select	Max(questions)	as questions,
		            Max(answers)	as answers,
                    Max(users)		as users
            from	(
	        		select	count(1)	as questions,
	        				0			as answers,
	        				0			as users
	        		from	question
	        		UNION
	        		select	0			as questions,
	        				count(1)	as answers,
	        				0			as users
	        		from	answer
	        		UNION
	        		select	0			as questions,
	        				0			as answers,
	        				count(1)	as users
	        		from	user
	        	    ) T
        ";
        
        try {
            $statement = $this->db->query($statement);
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }
    
    public function findUser()
    {
        $statement = "
        select	user_id,
        		full_name,
        		sum(question_point) + sum(answer_point) as final_point
        from	(
        			select	u.id as user_id,
        					count(q.user_id) * 5	as question_point,
        					0						as answer_point
        			from	user u
        					inner join question q
        						on q.user_id	= u.id
        			group by u.id
        			union
        			select	u.id as user_id,
        					0					as question_point,
        					count(a.user_id)	as answer_point
        			from	user u
        					inner join answer a
        						on a.user_id	= u.id
        			group by u.id
        		) T
                inner join user u
        			on u.id	= T.user_id
        group by T.user_id
        order by 2 desc
        limit 5
        ";
        
        try {
            $statement = $this->db->query($statement);
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }
}
