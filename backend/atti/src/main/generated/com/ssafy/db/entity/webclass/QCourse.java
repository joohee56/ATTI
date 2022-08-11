package com.ssafy.db.entity.webclass;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCourse is a Querydsl query type for Course
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCourse extends EntityPathBase<Course> {

    private static final long serialVersionUID = -848220445L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCourse course = new QCourse("course");

    public final DatePath<java.util.Date> courseDate = createDate("courseDate", java.util.Date.class);

    public final DateTimePath<java.util.Date> courseEndTime = createDateTime("courseEndTime", java.util.Date.class);

    public final NumberPath<Long> courseId = createNumber("courseId", Long.class);

    public final DateTimePath<java.util.Date> courseStartTime = createDateTime("courseStartTime", java.util.Date.class);

    public final com.ssafy.db.entity.user.QUser in_user;

    public final com.ssafy.db.entity.user.QUser make_user;

    public final ListPath<UserCourse, QUserCourse> usercourses = this.<UserCourse, QUserCourse>createList("usercourses", UserCourse.class, QUserCourse.class, PathInits.DIRECT2);

    public final QWebClass webclass;

    public QCourse(String variable) {
        this(Course.class, forVariable(variable), INITS);
    }

    public QCourse(Path<? extends Course> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCourse(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCourse(PathMetadata metadata, PathInits inits) {
        this(Course.class, metadata, inits);
    }

    public QCourse(Class<? extends Course> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.in_user = inits.isInitialized("in_user") ? new com.ssafy.db.entity.user.QUser(forProperty("in_user"), inits.get("in_user")) : null;
        this.make_user = inits.isInitialized("make_user") ? new com.ssafy.db.entity.user.QUser(forProperty("make_user"), inits.get("make_user")) : null;
        this.webclass = inits.isInitialized("webclass") ? new QWebClass(forProperty("webclass"), inits.get("webclass")) : null;
    }

}

