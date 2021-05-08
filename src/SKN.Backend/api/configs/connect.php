<?php 
class Connect extends PDO
{
    public function __construct()
    {        
        parent::__construct("mysql:host=34.126.87.148;dbname=SocialKnowledgeNetworking",'root','hcmus@2021' );
        $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    }
}
?>