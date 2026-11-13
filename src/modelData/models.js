const schemaInfo = {
  load_date_time: "Fri Apr 29 2016 01:45:15 GMT-0700 (PDT)",
  __v: 0,
  _id: "schema_v1",
};

const nvn = {
  _id: "nvn",
  first_name: "Nguyễn Văn",
  last_name: "Nam",
  location: "Hà Nội",
  description: "Mê lập trình web.",
  occupation: "Kỹ sư phần mềm",
};

const ttm = {
  _id: "ttm",
  first_name: "Trần Thị",
  last_name: "Mai",
  location: "Đà Nẵng",
  description: "Mê chụp ảnh, đọc sách.",
  occupation: "Thiết kế đồ họa",
};

const lat = {
  _id: "lat",
  first_name: "Lê Anh",
  last_name: "Tuấn",
  location: "TP. Hồ Chí Minh",
  description: "Thích khám phá và lưu giữ khoảnh khắc.",
  occupation: "Nhiếp ảnh gia",
};

const pks = {
  _id: "pks",
  first_name: "Phạm Khắc",
  last_name: "Sang",
  location: "Hà Nội",
  description: "Sinh viên PTIT - Khoa ATTT - B23DCAT257",
  occupation: "Sinh viên ATTT",
};

const hkl = {
  _id: "hkl",
  first_name: "Hoàng Khánh",
  last_name: "Linh",
  location: "Cần Thơ",
  description: "Yêu thiên nhiên và ẩm thực đường phố.",
  occupation: "Chuyên viên truyền thông",
};

const dtd = {
  _id: "dtd",
  first_name: "Dương Trần",
  last_name: "Đức",
  location: "Hà Nội",
  description: "Giảng viên Bộ môn LTW - PTIT",
  occupation: "Giảng viên",
};

const users = [nvn, ttm, lat, pks, hkl, dtd];

const photo1 = {
  _id: "dtd_p1",
  date_time: "2012-08-30 10:44:23",
  file_name: "dtd_1.jpg",
  user_id: dtd._id,
};

const photo2 = {
  _id: "nvn_p1",
  date_time: "2009-09-13 20:00:00",
  file_name: "nvn_1.jpg",
  user_id: nvn._id,
};

const photo3 = {
  _id: "nvn_p2",
  date_time: "2009-09-13 20:05:03",
  file_name: "nvn_2.jpg",
  user_id: nvn._id,
};

const photo4 = {
  _id: "ttm_p1",
  date_time: "2013-11-18 18:02:00",
  file_name: "ttm_1.jpg",
  user_id: ttm._id,
};

const photo5 = {
  _id: "ttm_p2",
  date_time: "2013-09-20 17:30:00",
  file_name: "ttm_2.jpg",
  user_id: ttm._id,
};

const photo6 = {
  _id: "pks_p1",
  date_time: "2009-07-10 16:02:49",
  file_name: "pks_1.jpg",
  user_id: pks._id,
};

const photo7 = {
  _id: "pks_p2",
  date_time: "2010-03-18 23:48:00",
  file_name: "pks_2.jpg",
  user_id: pks._id,
};

const photo8 = {
  _id: "pks_p3",
  date_time: "2010-08-30 14:26:00",
  file_name: "pks_3.jpg",
  user_id: pks._id,
};

const photo9 = {
  _id: "lat_p1",
  date_time: "2013-12-03 09:02:00",
  file_name: "lat_1.jpg",
  user_id: lat._id,
};

const photo10 = {
  _id: "lat_p2",
  date_time: "2013-12-03 09:03:00",
  file_name: "lat_2.jpg",
  user_id: lat._id,
};

const photo11 = {
  _id: "hkl_p1",
  date_time: "2013-09-04 09:16:32",
  file_name: "hkl_1.jpg",
  user_id: hkl._id,
};

const photo12 = {
  _id: "pks_p4",
  date_time: "2008-10-16 17:12:28",
  file_name: "pks_4.jpg",
  user_id: pks._id,
};

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
];

const comment1 = {
  _id: "c1",
  date_time: "2012-09-02 14:01:00",
  comment: "Lâu lâu post tấm ảnh cho các em biết thầy còn online nhá!",
  user: dtd,
  photo_id: photo1._id,
};

const comment2 = {
  _id: "c2",
  date_time: "2013-09-06 14:02:00",
  comment: "Đỉnh quá thầy ạ, kkk.",
  user: pks,
  photo_id: photo1._id,
};

const comment3 = {
  _id: "c3",
  date_time: "2013-09-08 14:06:00",
  comment: "Lâu em ko code còn quên đóng thẻ div nè thầy!",
  user: lat,
  photo_id: photo1._id,
};

const comment4 = {
  _id: "c4",
  date_time: "2009-09-14 18:07:00",
  comment: "Nhìn bình yên thật, chụp đâu thế bạn ơi?",
  user: nvn,
  photo_id: photo2._id,
};

const comment5 = {
  _id: "c5",
  date_time: "2013-11-28 17:45:13",
  comment: "Ngồi cả ngày muốn gãy cái lưng :))",
  user: ttm,
  photo_id: photo5._id,
};

const comment6 = {
  _id: "c6",
  date_time: "2013-11-02 14:07:00",
  comment: "Ô ảnh nét vậy, đổi máy rồi à?",
  user: ttm,
  photo_id: photo7._id,
};

const comment7 = {
  _id: "c7",
  date_time: "2013-11-02 14:09:15",
  comment: "Đoán xem :) Mai rảnh ko đi ra quán cafe t chụp cho",
  user: pks,
  photo_id: photo7._id,
};

const comment8 = {
  _id: "c8",
  date_time: "2010-09-06 13:59:33",
  comment: "Hồ Tây vào thu nhé các bác.",
  user: pks,
  photo_id: photo8._id,
};

const comment9 = {
  _id: "c9",
  date_time: "2008-10-16 18:04:55",
  comment: "Con xe gắn bó 1 thời sinh viên của em đó mọi người :))",
  user: pks,
  photo_id: photo12._id,
};

const comment10 = {
  _id: "c10",
  date_time: "2013-12-04 13:12:00",
  comment: "Chuyên mục sáng nay ăn gì hehe?",
  user: lat,
  photo_id: photo10._id,
};

const comment11 = {
  _id: "c11",
  date_time: "2013-09-04 10:14:32",
  comment: "Wow, bé nhà mấy tuổi rồi?",
  user: hkl,
  photo_id: photo11._id,
};

const comment12 = {
  _id: "c12",
  date_time: "2016-01-04 2:00:01",
  comment: "Trông chán ko, ông là đứa nào thế, kkk?",
  user: hkl,
  photo_id: photo9._id,
};

const comment13 = {
  _id: "c13",
  date_time: "2016-01-04 2:04:01",
  comment: "Mình bên phải nha, đứa cao hơn kkk",
  user: lat,
  photo_id: photo9._id,
};

const comments = [
  comment1,
  comment2,
  comment3,
  comment4,
  comment5,
  comment6,
  comment7,
  comment8,
  comment9,
  comment10,
  comment11,
  comment12,
  comment13,
];

comments.forEach(function (comment) {
  const photo = photos.filter(function (p) {
    return p._id === comment.photo_id;
  })[0];

  if (!photo.comments) {
    photo.comments = [];
  }
  photo.comments.push(comment);
});

const userListModel = function () {
  return users;
};

const userModel = function (userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === userId) {
      return users[i];
    }
  }
  return null;
};

const photoOfUserModel = function (userId) {
  return photos.filter(function (photo) {
    return photo.user_id === userId;
  });
};

const schemaModel = function () {
  return schemaInfo;
};

const models = {
  userListModel: userListModel,
  userModel: userModel,
  photoOfUserModel: photoOfUserModel,
  schemaInfo: schemaModel,
};

export default models;
