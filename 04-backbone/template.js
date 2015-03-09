     var data = [{title: "lala"}, {title: "jalksdm"}];


     var templateMovie =$("#movieTemplate").html();
            var templateList =$("#movieList").html();
            
            var compilemovie = Handlebars.compile(templateMovie);
            var compileList = Handlebars.compile(templateList);
            $('#container').html(compileList(data));
