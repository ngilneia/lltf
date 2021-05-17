<?php
include('header.php');
?>
        <div class="card card-primary">
            <div id="aa"></div>
            <div class="card-body">
                <form id="addUser" class="form-inline" method="POST" action="">
                    <div class="form-group">
                        <label for="name" class="sr-only">Hming</label>
                        <input id="name" type="text" class="form-control" name="name" placeholder="Hming"  required autofocus>
                    </div>
                    <div class="form-group">
                        <label for="kum" class="sr-only">Kum</label>
                        <input id="kum" type="number" class="form-control" name="kum" placeholder="Kum"  required autofocus>
                    </div>
                    <div class="form-group">
                        <label for="section" class="sr-only">Section</label>                        
                        <select name="section" id="section" class="form-control">
                            <option value="">Section thlan na</option>
                            <option value="Chawngbawla Section">Chawngbawla Section</option>
                            <option value="Neuva Section">Neuva Section</option>
                            <option value="Taitesena Section">Taitesena Section</option>
                            <option value="Zampuimanga Section">Zampuimanga Section</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="mobile" class="sr-only">Mobile</label>
                        <input id="mobile" type="number" class="form-control" name="mobile" placeholder="Mobile" required autofocus>
                    </div>
                    <div class="form-group">
                        <label for="ni" class="sr-only">Contact Ni</label>
                        <input id="ni" type="date" class="form-control" name="ni" placeholder="Contact Ni"  required autofocus>
                    </div>
                    <div class="form-group">
                        <label for="eizawnna" class="sr-only">Eizawnna</label>
                        <input id="eizawnna" type="text" class="form-control" name="eizawnna" placeholder="Eizawnna"  required autofocus>
                    </div>
                    <div class="form-group">
                        <label for="result" class="sr-only">Result</label>
                        <select name="result" id="result" class="form-control">
                            <option value="Test Tur">Test Tur</option>
                            <option value="Negative">Negative</option>
                            <option value="Positive">Positive</option>
                        </select>
                    </div>
                    <button id="submitUser" type="button" class="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </div>

        
<?php
include('footer.php');
?>        
