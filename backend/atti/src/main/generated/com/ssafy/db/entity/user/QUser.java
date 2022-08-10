package com.ssafy.db.entity.user;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = -1338617140L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUser user = new QUser("user");

    public final ListPath<com.ssafy.db.entity.webclass.Attendance, com.ssafy.db.entity.webclass.QAttendance> attendances = this.<com.ssafy.db.entity.webclass.Attendance, com.ssafy.db.entity.webclass.QAttendance>createList("attendances", com.ssafy.db.entity.webclass.Attendance.class, com.ssafy.db.entity.webclass.QAttendance.class, PathInits.DIRECT2);

    public final QAuth auth;

    public final DatePath<java.util.Date> birth = createDate("birth", java.util.Date.class);

    public final ListPath<com.ssafy.db.entity.depart.Category, com.ssafy.db.entity.depart.QCategory> categorys = this.<com.ssafy.db.entity.depart.Category, com.ssafy.db.entity.depart.QCategory>createList("categorys", com.ssafy.db.entity.depart.Category.class, com.ssafy.db.entity.depart.QCategory.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.db.entity.chat.Chat, com.ssafy.db.entity.chat.QChat> chats = this.<com.ssafy.db.entity.chat.Chat, com.ssafy.db.entity.chat.QChat>createList("chats", com.ssafy.db.entity.chat.Chat.class, com.ssafy.db.entity.chat.QChat.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.db.entity.depart.Comment, com.ssafy.db.entity.depart.QComment> comments = this.<com.ssafy.db.entity.depart.Comment, com.ssafy.db.entity.depart.QComment>createList("comments", com.ssafy.db.entity.depart.Comment.class, com.ssafy.db.entity.depart.QComment.class, PathInits.DIRECT2);

    public final com.ssafy.db.entity.webclass.QCourse course;

    public final ListPath<com.ssafy.db.entity.webclass.Course, com.ssafy.db.entity.webclass.QCourse> courses = this.<com.ssafy.db.entity.webclass.Course, com.ssafy.db.entity.webclass.QCourse>createList("courses", com.ssafy.db.entity.webclass.Course.class, com.ssafy.db.entity.webclass.QCourse.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.db.entity.depart.Depart, com.ssafy.db.entity.depart.QDepart> departs = this.<com.ssafy.db.entity.depart.Depart, com.ssafy.db.entity.depart.QDepart>createList("departs", com.ssafy.db.entity.depart.Depart.class, com.ssafy.db.entity.depart.QDepart.class, PathInits.DIRECT2);

    public final StringPath email = createString("email");

    public final ListPath<com.ssafy.db.entity.message.UserMessage, com.ssafy.db.entity.message.QUserMessage> fromusers = this.<com.ssafy.db.entity.message.UserMessage, com.ssafy.db.entity.message.QUserMessage>createList("fromusers", com.ssafy.db.entity.message.UserMessage.class, com.ssafy.db.entity.message.QUserMessage.class, PathInits.DIRECT2);

    public final StringPath phone = createString("phone");

    public final ListPath<com.ssafy.db.entity.depart.Post, com.ssafy.db.entity.depart.QPost> posts = this.<com.ssafy.db.entity.depart.Post, com.ssafy.db.entity.depart.QPost>createList("posts", com.ssafy.db.entity.depart.Post.class, com.ssafy.db.entity.depart.QPost.class, PathInits.DIRECT2);

    public final QProfile profile;

    public final StringPath social = createString("social");

    public final ListPath<com.ssafy.db.entity.message.UserMessage, com.ssafy.db.entity.message.QUserMessage> tousers = this.<com.ssafy.db.entity.message.UserMessage, com.ssafy.db.entity.message.QUserMessage>createList("tousers", com.ssafy.db.entity.message.UserMessage.class, com.ssafy.db.entity.message.QUserMessage.class, PathInits.DIRECT2);

    public final NumberPath<Long> uid = createNumber("uid", Long.class);

    public final ListPath<com.ssafy.db.entity.depart.UserCommentLike, com.ssafy.db.entity.depart.QUserCommentLike> usercommentlikes = this.<com.ssafy.db.entity.depart.UserCommentLike, com.ssafy.db.entity.depart.QUserCommentLike>createList("usercommentlikes", com.ssafy.db.entity.depart.UserCommentLike.class, com.ssafy.db.entity.depart.QUserCommentLike.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.db.entity.depart.UserCommentMention, com.ssafy.db.entity.depart.QUserCommentMention> usercommentmentions = this.<com.ssafy.db.entity.depart.UserCommentMention, com.ssafy.db.entity.depart.QUserCommentMention>createList("usercommentmentions", com.ssafy.db.entity.depart.UserCommentMention.class, com.ssafy.db.entity.depart.QUserCommentMention.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.db.entity.webclass.UserCourse, com.ssafy.db.entity.webclass.QUserCourse> usercourses = this.<com.ssafy.db.entity.webclass.UserCourse, com.ssafy.db.entity.webclass.QUserCourse>createList("usercourses", com.ssafy.db.entity.webclass.UserCourse.class, com.ssafy.db.entity.webclass.QUserCourse.class, PathInits.DIRECT2);

    public final BooleanPath userDeleteInfo = createBoolean("userDeleteInfo");

    public final ListPath<com.ssafy.db.entity.depart.UserDepart, com.ssafy.db.entity.depart.QUserDepart> userDeparts = this.<com.ssafy.db.entity.depart.UserDepart, com.ssafy.db.entity.depart.QUserDepart>createList("userDeparts", com.ssafy.db.entity.depart.UserDepart.class, com.ssafy.db.entity.depart.QUserDepart.class, PathInits.DIRECT2);

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public final StringPath userName = createString("userName");

    public final ListPath<com.ssafy.db.entity.depart.UserPostLike, com.ssafy.db.entity.depart.QUserPostLike> userpostlikes = this.<com.ssafy.db.entity.depart.UserPostLike, com.ssafy.db.entity.depart.QUserPostLike>createList("userpostlikes", com.ssafy.db.entity.depart.UserPostLike.class, com.ssafy.db.entity.depart.QUserPostLike.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.db.entity.depart.UserPostMention, com.ssafy.db.entity.depart.QUserPostMention> userpostmentions = this.<com.ssafy.db.entity.depart.UserPostMention, com.ssafy.db.entity.depart.QUserPostMention>createList("userpostmentions", com.ssafy.db.entity.depart.UserPostMention.class, com.ssafy.db.entity.depart.QUserPostMention.class, PathInits.DIRECT2);

    public final EnumPath<UserRole> userRole = createEnum("userRole", UserRole.class);

    public QUser(String variable) {
        this(User.class, forVariable(variable), INITS);
    }

    public QUser(Path<? extends User> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUser(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUser(PathMetadata metadata, PathInits inits) {
        this(User.class, metadata, inits);
    }

    public QUser(Class<? extends User> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.auth = inits.isInitialized("auth") ? new QAuth(forProperty("auth"), inits.get("auth")) : null;
        this.course = inits.isInitialized("course") ? new com.ssafy.db.entity.webclass.QCourse(forProperty("course"), inits.get("course")) : null;
        this.profile = inits.isInitialized("profile") ? new QProfile(forProperty("profile"), inits.get("profile")) : null;
    }

}

