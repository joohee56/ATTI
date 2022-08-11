package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserCommentMention is a Querydsl query type for UserCommentMention
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserCommentMention extends EntityPathBase<UserCommentMention> {

    private static final long serialVersionUID = -555326930L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserCommentMention userCommentMention = new QUserCommentMention("userCommentMention");

    public final QComment comment;

    public final com.ssafy.db.entity.user.QUser user;

    public final NumberPath<Long> userCommentMentionId = createNumber("userCommentMentionId", Long.class);

    public QUserCommentMention(String variable) {
        this(UserCommentMention.class, forVariable(variable), INITS);
    }

    public QUserCommentMention(Path<? extends UserCommentMention> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserCommentMention(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserCommentMention(PathMetadata metadata, PathInits inits) {
        this(UserCommentMention.class, metadata, inits);
    }

    public QUserCommentMention(Class<? extends UserCommentMention> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.comment = inits.isInitialized("comment") ? new QComment(forProperty("comment"), inits.get("comment")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

