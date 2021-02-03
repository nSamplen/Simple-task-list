$(function(){


	if ($('.task').length == 0)
		{
			showEmpty();
		}
	//$('.task').remove();



	function removeTaskFromList(){
		$(this).parents('.task').remove();
		if ($('.task').length == 0)
		{
			showEmpty();
		}
	}

	function hideDescription(){
		var parent1 = $(this).parents('.task').children('.task-description');

		if (parent1.is(':visible'))
		{
			parent1.fadeOut();
			parent1.animate({
				height: 0
			},400);

			$(this).css("background-image", "url('styles/icon-open.png')");
		}
		else
		{
			parent1.fadeIn();
			parent1.animate({
				'min-height': '75px'
			},400);
			$(this).css("background-image", "url('styles/icon-hide.png')");
		}		
	}

	function showEmpty(){
		var newTask = $('<div></div');
		newTask.addClass('task-empty');
		newTask.text("No tasks...");
		$('#column-list').append(newTask);
	}


	function addTaskToList(){
		
		$('.task-empty').remove();

		var newTask = $('<div></div');
		var taskMainInfo = $('<div></div');
		var taskName = $('<div></div');
		var taskDelete = $('<div></div');
		var taskHideDesc = $('<div></div');
		var taskDescription = $('<div></div');
		newTask.addClass('task');
		taskMainInfo.addClass('task-main-info');
		taskName.addClass('task-name');
		taskDelete.addClass('task-delete');
		taskHideDesc.addClass('task-hide-desc');
		taskDescription.addClass('task-description');

		//var name =$('#add-task-name').val();
		taskName.text($('#add-task-name').val());
		taskDescription.text($('#add-task-desc').val());

		taskMainInfo.append(taskName).append(taskDelete).append(taskHideDesc);

		newTask.append(taskMainInfo).append(taskDescription);

		$('#column-list').append(newTask);
		$('#add-task-name').val("");
		$('#add-task-desc').val("");

		taskDelete.on('click',removeTaskFromList);
		taskHideDesc.on('click',hideDescription);
	} 



	$('#add-task-button').click(addTaskToList);


	$('.task-delete').on('click',function(){
		$(this).parents('.task').remove();
		if ($('.task').length == 0)
		{
			showEmpty();
		}
	});

	$('.task-hide-desc').on('click',hideDescription);




});