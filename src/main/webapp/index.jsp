<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Callback Application</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="assets/css/jquery-ui.theme.min.css" rel="stylesheet">
<link href="assets/css/bootstrap.min.css" rel="stylesheet">
<link href="assets/css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="assets/css/font-awesome.min.css" rel="stylesheet">
<link href="assets/css/toastr.css" rel="stylesheet">
<link href="assets/css/custom.css" rel="stylesheet">
</head>
<body>
	<div class="container">
		<div class="row" id="loginpanel">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-default poslogin">
					<div class="panel-heading">
						<img src="assets/img/eishtecmicro.png" style="float: right;" /> <img
							src="assets/img/cblogo.png" />
					</div>
					<div class="panel-body">
						<form id="loginform">
							<div class="form-group">
								<label for="logempnumber">Employee Number</label> <input
									type="number" class="form-control" id="logempnumber"
									placeholder="Enter Employee Number" required>
							</div>
							<button type="submit" class="btn btn-primary">Login</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row" id="fullpanel">
		<div class="col-md-6 col-md-offset-4">
			<div class="posicon">
				<div class="col-md-3">
					<div class="btn btn-primary btn-width" id="fullarrange">
						<i class="fa fa-headphones iconfont"></i>
						<h5 class="panelfont">Arrange Callback</h5>
					</div>
				</div>
				<div class="col-md-3">
					<div class="btn btn-primary btn-width">
						<i class="fa fa-thumbs-up iconfont" id="fullperform"></i>
						<h5 class="panelfont">Perform Callback</h5>
					</div>
				</div>
				<div class="col-md-3">
					<div class="btn btn-danger btn-width" id="fullexit">
						<i class="fa fa-power-off iconfont"></i>
						<h5 class="panelfont">Exit Application</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row" id="partialpanel">
		<div class="col-md-6 col-md-offset-4">
			<div class="posicon">
				<div class="col-md-3">
					<div class="btn btn-primary btn-width" id="partarrange">
						<i class="fa fa-headphones iconfont"></i>
						<h5 class="panelfont">Arrange Callback</h5>
					</div>
				</div>
				<div class="col-md-1"></div>
				<div class="col-md-3">
					<div class="btn btn-danger btn-width" id="partexit">
						<i class="fa fa-power-off iconfont"></i>
						<h5 class="panelfont">Exit Application</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container" id="arrangepanel">
		<div class="row">
			<div class="col-md-6">
				<h2>Arrange Callback</h2>
			</div>
			<div class="col-md-6">
				<button class="btn btn-danger btn-sm float-right" id="exitarrange">
					Exit Application</button>
			</div>
		</div>
		<div class="panel">
			<form id="formarrcallback">
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
                            <label for="cbdate">Callback Date</label> <input id="cbdate" type="text" class="date-picker form-control" required />
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
                            <label for="cbtime">Callback Time</label> <input id="cbtime" type="text" class="form-control" readonly required />
								 <input
								id="cbref" type="hidden" class="form-control" />
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<table class="table table-condensed">
							<tr>
								<td><span class="label label-primary">Date</span></td>
								<td>8am</td>
								<td>9am</td>
								<td>10am</td>
								<td>11am</td>
								<td>12pm</td>
								<td>1pm</td>
								<td>2pm</td>
								<td>3pm</td>
								<td>4pm</td>
								<td>5pm</td>
								<td>6pm</td>
								<td>7pm</td>
								<td>8pm</td>
								<td>9pm</td>
							</tr>
							<tbody id="tslotselect" data-bind="foreach: timeslots">
								<tr>
									<td><span class="label label-success"
										data-bind="text: date"></span></td>
									<td><span id="8am" title="slota" class="btn btn-info btn-xs"
										data-bind="text: slota"></span></td>
									<td><span id="9am" title="slotb" class="btn btn-info btn-xs"
										data-bind="text: slotb"></span></td>
									<td><span id="10am" title="slotc" class="btn btn-info btn-xs"
										data-bind="text: slotc"></span></td>
									<td><span id="11am" title="slotd" class="btn btn-info btn-xs"
										data-bind="text: slotd"></span></td>
									<td><span id="12pm" title="slote" class="btn btn-info btn-xs"
										data-bind="text: slote"></span></td>
									<td><span id="1pm" title="slotf" class="btn btn-info btn-xs"
										data-bind="text: slotf"></span></td>
									<td><span id="2pm" title="slotg" class="btn btn-info btn-xs"
										data-bind="text: slotg"></span></td>
									<td><span id="3pm" title="sloth" class="btn btn-info btn-xs"
										data-bind="text: sloth"></span></td>
									<td><span id="4pm" title="sloti" class="btn btn-info btn-xs"
										data-bind="text: sloti"></span></td>
									<td><span id="5pm" title="slotj" class="btn btn-info btn-xs"
										data-bind="text: slotj"></span></td>
									<td><span id="6pm" title="slotk" class="btn btn-info btn-xs"
										data-bind="text: slotk"></span></td>
									<td><span id="7pm" title="slotl" class="btn btn-info btn-xs"
										data-bind="text: slotl"></span></td>
									<td><span id="8pm" title="slotm" class="btn btn-info btn-xs"
										data-bind="text: slotm"></span></td>
									<td><span id="9pm" title="slotn" class="btn btn-info btn-xs"
										data-bind="text: slotn"></span></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
                            <label for="customer">Customer Name</label> <input id="customer" type="text" class="form-control" required />
						</div>
					</div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="mobile">Customer Mobile</label> 
                            <input id="mobile" type="text" class="form-control" required />
                        </div>  
                    </div>
				</div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="landline">Customer Landline</label> 
                            <input id="landline" type="text" class="form-control" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="cbtype">Callback Reason</label>
                            <select id="cbtype" class="form-control" required>
                                <option value="">Please Select Reason</option>
                                <option value="Technical">Technical</option>
                                <option value="Sales">Sales</option>
                                <option value="Cancellation">Cancellation</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="cbreason">Callback Details</label>
                            <textarea id="cbreason" rows="4" class="form-control" required></textarea>
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">                    
                        <button type="submit" class="btn btn-success">Arrange Callback</button>
                    </div>
                </div>
			</form>
		</div>
	</div>
	<div class="container" id="performpanel">
		<div class="row">
			<div class="col-md-6">
				<h2>Perform Callback</h2>
			</div>
			<div class="col-md-6">
				<button class="btn btn-danger btn-sm float-right" id="exitperform">
					Exit Application</button>
			</div>
		</div>
		<div class="row">
<div class="col-md-12">
						<table class="table table-condensed">
							<tr>
								<td><span class="label label-primary">Date</span></td>
								<td>8am</td>
								<td>9am</td>
								<td>10am</td>
								<td>11am</td>
								<td>12pm</td>
								<td>1pm</td>
								<td>2pm</td>
								<td>3pm</td>
								<td>4pm</td>
								<td>5pm</td>
								<td>6pm</td>
								<td>7pm</td>
								<td>8pm</td>
								<td>9pm</td>
							</tr>
							<tbody id="tslotperform">
								<tr>
									<td><span class="label label-success" data-bind="text: displaydate"></span></td>
									<td><span id="8am" title="slota" class="btn btn-info btn-xs"
										data-bind="text: activeslota().length"></span></td>
									<td><span id="9am" title="slotb" class="btn btn-info btn-xs"
										data-bind="text: activeslotb().length"></span></td>
									<td><span id="10am" title="slotc" class="btn btn-info btn-xs"
										data-bind="text: activeslotc().length"></span></td>
									<td><span id="11am" title="slotd" class="btn btn-info btn-xs"
										data-bind="text: activeslotd().length"></span></td>
									<td><span id="12pm" title="slote" class="btn btn-info btn-xs"
										data-bind="text: activeslote().length"></span></td>
									<td><span id="1pm" title="slotf" class="btn btn-info btn-xs"
										data-bind="text: activeslotf().length"></span></td>
									<td><span id="2pm" title="slotg" class="btn btn-info btn-xs"
										data-bind="text: activeslotg().length"></span></td>
									<td><span id="3pm" title="sloth" class="btn btn-info btn-xs"
										data-bind="text: activesloth().length"></span></td>
									<td><span id="4pm" title="sloti" class="btn btn-info btn-xs"
										data-bind="text: activesloti().length"></span></td>
									<td><span id="5pm" title="slotj" class="btn btn-info btn-xs"
										data-bind="text: activeslotj().length"></span></td>
									<td><span id="6pm" title="slotk" class="btn btn-info btn-xs"
										data-bind="text: activeslotk().length"></span></td>
									<td><span id="7pm" title="slotl" class="btn btn-info btn-xs"
										data-bind="text: activeslotl().length"></span></td>
									<td><span id="8pm" title="slotm" class="btn btn-info btn-xs"
										data-bind="text: activeslotm().length"></span></td>
									<td><span id="9pm" title="slotn" class="btn btn-info btn-xs"
										data-bind="text: activeslotn().length"></span></td>
								</tr>
							</tbody>
						</table>
					</div>

		</div>
		<div class="row">
           	<div class="col-md-12">
           		<button id="nextcallback" class="btn btn-primary btn-block">Get Next Callback</button>
           	</div>
		</div>
	</div>
	<img class="logosmall" src="assets/img/fiostalogo.png" />
	<script src="assets/js/jquery-2.1.3.min.js"></script>
	<script src="assets/js/jquery-ui.min.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/knockout-3.2.0.js"></script>
	<script src="assets/js/toastr.js"></script>
	<script src="assets/js/lscache.min.js"></script>
	<script src="assets/js/custom.js"></script>
</body>
</html>
