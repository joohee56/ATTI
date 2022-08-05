package com.ssafy.db.entity.webclass;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserCourse is a Querydsl query type for UserCourse
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserCourse extends EntityPathBase<UserCourse> {

    private static final long serialVersionUID = -257089906L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserCourse userCourse = new QUserCourse("userCourse");

    public final QCourse course;

    public final com.ssafy.db.entity.user.QUser user;

    public final NumberPath<Long> userCourseId = createNumber("userCourseId", Long.class);

    public QUserCourse(String variable) {
        this(UserCourse.class, forVariable(variable), INITS);
    }

    public QUserCourse(Path<? extends UserCourse> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserCourse(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserCourse(PathMetadata metadata, PathInits inits) {
        this(UserCourse.class, metadata, inits);
    }

    public QUserCourse(Class<? extends UserCourse> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.course = inits.isInitialized("course") ? new QCourse(forProperty("course"), inits.get("course")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

