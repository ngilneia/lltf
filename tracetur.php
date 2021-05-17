<?php
include('header.php');
?>

<div class="container">
<h5>Trace tur list</h5>
        <table id="tables" class="table table-striped">
            <tr>
                <th>Details</th>
            </tr>
            <tbody id="tbody">
            </tbody>
        </table>
        <table id="tabless" class="visually-hidden">
            <tr>
                <th>Name</th>
                <th>Kum</th>
                <th>Section</th>
                <th>Contact</th>
                <th>Mobile</th>
                <th>Hnathawh</th>
                <th>Result</th>
            </tr>
            <tbody id="tbodys">
            </tbody>
        </table>
        <button id="export" class="btn btn-info">Export</button>
    </div>

    <!-- Update Model -->
    <form action="" method="POST" class="users-update-record-model form-horizontal">
        <div id="update-modal" data-backdrop="static" data-keyboard="false" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" style="overflow: hidden;">
                    <div class="modal-header">
                        <h4 class="modal-title" id="custom-width-modalLabel">Update</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="updateBody">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success updateUser">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!-- Delete Model -->
    <form action="" method="POST" class="users-remove-record-model">
        <div id="remove-modal" data-backdrop="static" data-keyboard="false" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel2"
             aria-hidden="true" style="display: none;">
            <div class="modal-dialog modal-dialog-centered" style="width:55%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="custom-width-modalLabel2">Delete</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Do you want to delete this record?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger waves-effect waves-light deleteRecord">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

<?php
include('footer.php');
?>
