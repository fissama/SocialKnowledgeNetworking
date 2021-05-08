<?php 
require_once("../configs/connect.php");
class Category
{
    function SELECT(){
        $db = new Connect;
        $category = array();
        $data = $db->prepare('SELECT * FROM Category ORDER BY id');
        $data->execute();
        while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){
            $category[$OutputData['id']]=array(
                'id'=>$OutputData['id'],
                'category_name' =>$OutputData['category_name']
            );
        }
        return json_encode($category);
    }
}
$testApi = new Category;
header(('Content-Type: application/json'));
echo $testApi->SELECT();
?>