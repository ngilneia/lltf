           var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, option)
});
           
           // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
                apiKey: "AIzaSyCqI2o6DT6uB0PXHtMcELzxiTbZPnsFCrQ",
                authDomain: "zonuam-986d4.firebaseapp.com",
                projectId: "zonuam-986d4",
                storageBucket: "zonuam-986d4.appspot.com",
                messagingSenderId: "770770942318",
                appId: "1:770770942318:web:5f14a62b519b627465297f",
                measurementId: "G-0YTGFGF7GG"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();

        var database = firebase.database();

        var lastIndex = 0;

        // Get Data
        firebase.database().ref('Users/').on('value', function (snapshot) {
            var value = snapshot.val();
            var htmls = [];
            var htmlss = [];
            $.each(value, function (index, value) {
                if (value) {
                    htmls.push('<tr>\
                    <td>' + value.name + '(' + value.kum + ')<br/>' + value.section +'<br/>Contact Ni: '+ value.ni + '<br/>Eizawnna: '+value.eizawnna +'<br/>Result: '+ value.result+ '<br/><a href="tel:' +  value.mobile +'"><i class="bi bi-telephone-fill"></i> '+ value.mobile+'</a>\
                    <br/><button data-bs-toggle="modal" data-bs-target="#update-modal" class="btn  align-self-start updateData" data-id="' + index + '"><i class="bi bi-pencil-square" style="font-size:2em; color:#0d6efd;"></i></button>\
                    <button data-bs-toggle="modal" data-bs-target="#remove-modal" class="btn  align-self-end removeData" data-id="' + index + '"><i class="bi bi-x-circle-fill" style="font-size:2em; color:#dc3545;"></i></button></td>\
                </tr>');
                }
                lastIndex = index;
            });
            $('#tbody').html(htmls);
            $.each(value, function (index, value) {
                if (value) {
                    htmlss.push('<tr>\
                    <td>' + value.name +'</td>\
                    <td>' + value.kum +'</td>\
                    <td>' + value.section +'</td>\
                    <td>' + value.ni +'</td>\
                    <td>' + value.mobile +'</td>\
                    <td>' + value.eizawnna +'</td>\
                    <td>' + value.result +'</td>\
                </tr>');
                }
                lastIndex = index;
            });
            $('#tbodys').html(htmlss);
            $("#submitUser").removeClass('disabled');
        });

        // Add Data
$('#submitUser').on('click', function () {
    var toaster = '<div class="alert alert-success alert-dismissible fade show" role="alert">\
  <strong>Name added Succesfully.\
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\
</div>';
            var values = $("#addUser").serializeArray();
            var name = values[0].value;
            var kum = values[1].value;
            var section = values[2].value;
            var mobile = values[3].value;
            var ni = values[4].value;
            var eizawnna = values[5].value;
            var result = values[6].value;
            var userID = lastIndex + 1;

            console.log(values);

            firebase.database().ref('Users/' + userID).set({
                name: name,
                kum: kum,
                section: section,
                mobile: mobile,
                ni: ni,
                eizawnna: eizawnna,
                result: result
            });

            // Reassign lastID value
            lastIndex = userID;
            $("#addUser input").val("");
            $("#aa").html(toaster);
        });

        // Update Data
        var updateID = 0;
        $('body').on('click', '.updateData', function () {
            updateID = $(this).attr('data-id');
            firebase.database().ref('Users/' + updateID).on('value', function (snapshot) {
                var values = snapshot.val();
                var updateData = '<div class="form-group">\
                    <label for="name" class="col-md-12 col-form-label">Name</label>\
                    <div class="col-md-12">\
                        <input id="name" type="text" class="form-control" name="name" value="' + values.name + '" required autofocus>\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label for="kum" class="col-md-12 col-form-label">Kum</label>\
                    <div class="col-md-12">\
                        <input id="kum" type="number" class="form-control" name="kum" value="' + values.kum + '" required autofocus>\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label for="section" class="col-md-12 col-form-label">Section</label>\
                        <select name="section" id="section" class="form-control col-md-12">\
                            <option value="Chawngbawla Section">Chawngbawla Section</option>\
                            <option value="Neuva Section">Neuva Section</option>\
                            <option value="Taitesena Section">Taitesena Section</option>\
                            <option value="Zampuimanga Section">Zampuimanga Section</option>\
                        </select>\
                </div>\
                <div class="form-group">\
                    <label for="mobile" class="col-md-12 col-form-label">Mobile</label>\
                    <div class="col-md-12">\
                        <input id="mobile" type="number" class="form-control" name="mobile" value="' + values.mobile + '" required autofocus>\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label for="ni" class="col-md-12 col-form-label">Ni</label>\
                    <div class="col-md-12">\
                        <input id="ni" type="date" class="form-control" name="ni" value="' + values.ni + '" required autofocus>\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label for="eizawnna" class="col-md-12 col-form-label">Eizawnna</label>\
                    <div class="col-md-12">\
                        <input id="eizawnna" type="text" class="form-control" name="eizawnna" value="' + values.eizawnna + '" required autofocus>\
                    </div>\
                </div>\
                <div class="form-group">\
                        <label for="result" class="sr-only">Result</label>\
                        <select name="result" id="result" class="form-control">\
                            <option value="Test Tur">Test Tur</option>\
                            <option value="Negative">Negative</option>\
                            <option value="Positive">Positive</option>\
                        </select>\
                    </div>';

                $('#updateBody').html(updateData);
            });
        });

        $('.updateUser').on('click', function () {
            var values = $(".users-update-record-model").serializeArray();
            var postData = {
                name: values[0].value,
                kum: values[1].value,
                section: values[2].value,
                mobile:values[3].value,
                ni: values[4].value,
                eizawnna: values[5].value,
                result: values[6].value
            };

            var updates = {};
            updates['/Users/' + updateID] = postData;

            firebase.database().ref().update(updates);

            $("#update-modal").modal('hide');
        });

        // Remove Data
        $("body").on('click', '.removeData', function () {
            var id = $(this).attr('data-id');
            $('body').find('.users-remove-record-model').append('<input name="id" type="hidden" value="' + id + '">');
        });

        $('.deleteRecord').on('click', function () {
            var values = $(".users-remove-record-model").serializeArray();
            var id = values[0].value;
            firebase.database().ref('Users/' + id).remove();
            $('body').find('.users-remove-record-model').find("input").remove();
            $("#remove-modal").modal('hide');
        });
        $('.remove-data-from-delete-form').click(function () {
            $('body').find('.users-remove-record-model').find("input").remove();
        });
