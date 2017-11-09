$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;

  var updating = false;

  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  var bodyInput = $("#body");
  var titleInput = $("#title");
  var cmsForm = $("#cms");
  var postRecipeSelect = $("#category");
 
  postRecipeSelect.val("Recipe");
  $(cmsForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();

    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
   
    var newPost = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim(),
      category: postRecipeSelect.val()
    };
    console.log(newPost);
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  });

  function submitPost(Post) {
    $.post("/api/posts/", Post, function() {
      window.location.href = "/recipes";
    });
  }

  function getPostData(id) {
    $.get("/api/posts/" + id, function(data) {
      if (data) {
        titleInput.val(data.title);
        bodyInput.val(data.body);
        postCategorySelect.val(data.category);
        updating = true;
      }
    });
  }

  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
    .done(function() {
      window.location.href = "/recipes";
    });
  }
});